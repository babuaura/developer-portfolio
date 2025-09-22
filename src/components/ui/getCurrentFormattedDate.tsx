export default function GetCurrentFormattedDate(): string {
  const now = new Date();

  // Options for formatting the date components
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long", // Full month name (e.g., "September")
    day: "numeric", // Day of the month (e.g., "21")
  };

  const formattedDate = now.toLocaleDateString("en-US", options);

  return `Last updated: ${formattedDate}.`;
}

// Example Usage:
// const currentUpdateString = getCurrentFormattedDate();
// console.log(currentUpdateString);
// Output will be: Last updated: September 21, 2025. (based on current system time)
