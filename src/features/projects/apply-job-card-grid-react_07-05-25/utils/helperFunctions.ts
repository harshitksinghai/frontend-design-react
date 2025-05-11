export function capitalizeFirstLetter(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeWords(str: string): string {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}

export function getTimeAgo(dateString: string): string {
    const givenDate = new Date(dateString);
    const now = new Date();
  
    const diffMs = now.getTime() - givenDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
    if(diffDays == 1) return `${diffDays} day ago`;
    if(diffDays <= 30) return `${diffDays} days ago`;
  
    const diffMonths = Math.floor(diffDays / 30);
    if(diffMonths == 1) return `${diffMonths} month ago`;
    return `${diffMonths} months ago`;
}
  