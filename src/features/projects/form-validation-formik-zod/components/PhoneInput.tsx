import React, { useState, useRef, useEffect } from 'react';
import { parsePhoneNumberWithError, CountryCode, getCountries } from 'libphonenumber-js';
import styles from './PhoneInput.module.css';

interface Country {
    name: string;
    code: CountryCode;
    dialCode: string;
}

const countryCodes: Country[] = getCountries().map(code => {
    const exampleNumber = parsePhoneNumberWithError('1234567890', { defaultCountry: code });
    return {
        name: new Intl.DisplayNames(['en'], { type: 'region' }).of(code) || code,
        code,
        dialCode: exampleNumber ? `+${exampleNumber.countryCallingCode}` : ''
    };
}).sort((a, b) => a.name.localeCompare(b.name));

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
    onBlur: (e: React.FocusEvent<any>) => void;
    error?: string;
    touched?: boolean;
    name: string;
}

const CustomPhoneInput: React.FC<PhoneInputProps> = ({
    value,
    onChange,
    onBlur,
    error,
    touched,
    name
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState<Country>(
        countryCodes.find(country => country.code === 'IN') || countryCodes[0]
    );
    const [localError, setLocalError] = useState<string>('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Split the value into country code and number
    const [_countryCode, phoneNumber] = value.split(' ');

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const validatePhoneNumber = (number: string, countryCode: CountryCode): string => {
        if (!number) return 'Phone number is required';
        
        try {
            const phoneNumber = parsePhoneNumberWithError(number, { defaultCountry: countryCode });
            
            if (!phoneNumber.isValid()) {
                return 'Invalid phone number for selected country';
            }
            
            return '';
        } catch (error) {
            return 'Invalid phone number format';
        }
    };

    const handleCountrySelect = (country: Country) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
        // Update the full phone number with new country code
        const newNumber = phoneNumber ? `${country.dialCode} ${phoneNumber}` : country.dialCode;
        onChange(newNumber);
        
        // Validate the existing number with new country rules
        if (phoneNumber) {
            const error = validatePhoneNumber(phoneNumber, country.code);
            setLocalError(error);
        }
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNumber = e.target.value.replace(/\D/g, ''); // Remove non-digits
        // Update the full phone number keeping the country code
        onChange(`${selectedCountry.dialCode} ${newNumber}`);
        
        // Validate the new number
        const error = validatePhoneNumber(newNumber, selectedCountry.code);
        setLocalError(error);
    };

    const filteredCountries = countryCodes.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.dialCode.includes(searchTerm)
    );

    return (
        <div className={styles.phoneInputContainer}>
            <div className={styles.phoneInputWrapper}>
                {/* Country Code Part (15%) */}
                <div className={styles.countryCodePart}>
                    <div 
                        className={styles.countryCodeButton}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {selectedCountry.dialCode}
                    </div>
                    {isDropdownOpen && (
                        <div className={styles.dropdown} ref={dropdownRef}>
                            <input
                                type="text"
                                className={styles.searchInput}
                                placeholder="Search country..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className={styles.countryList}>
                                {filteredCountries.map((country) => (
                                    <div
                                        key={country.code}
                                        className={styles.countryItem}
                                        onClick={() => handleCountrySelect(country)}
                                    >
                                        <span className={styles.countryName}>{country.name}</span>
                                        <span className={styles.dialCode}>{country.dialCode}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* Phone Number Part (85%) */}
                <input
                    type="tel"
                    name={name}
                    className={styles.phoneNumberInput}
                    value={phoneNumber || ''}
                    onChange={handlePhoneNumberChange}
                    onBlur={onBlur}
                    placeholder="Enter phone number"
                />
            </div>
            {(touched && (error || localError)) && (
                <div className={styles.errorText}>{error || localError}</div>
            )}
        </div>
    );
};

export default CustomPhoneInput; 