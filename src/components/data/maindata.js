// maindata consolidates all small frequently modified data used throughout the site

// You would still need to modify other bigger parts of the data for the site
// stored in other files

export const maindata = {
  current_year: "2024",

  event_starting_date: "May 3, 2024 00:00:00", // Target timestamp for taskbar countdown timer
  event_date_range: "03|05|2024 - 10|05|2024", // Date range displayed above registration links
  // Do not change the formatting of the date of the above two fields

  registration_link: "https://docs.google.com/forms/d/e/1FAIpQLSco6oM8CcPCOhk7RqqH3WUOX3ZrYGxTVwkGXUOrbYOyF_wV2g/viewform",
  discord_link: "https://discord.com/invite/E5QMdgkf",

  notif_recent_expiry_duration: 3, // Days for which new notifications are marked recent in panel

  phone_record: [
    // Format: "Name - Designation", "91 XXXXX XXXXX", "Discord username (Optional)"

    ["Gauri Tandon - President", "91 93104 55249", "udontknow.me"], // President
    ["Aryav Saigal - Vice President", "91 95192 41079", "darkdragon532"], // Vice President
    ["", "", ""], // Secretary
    ["Promila Sang - Faculty In-charge", "91 99687 21909"], // Faculty In-charge
    ["Punita Ahuja - Faculty In-charge", "91 98102 44730"], // Faculty In-charge

    // Do not try to add, remove or rearrange the arrays of designations since
    // their allocations are fixed in the front-end of the page
  ],
};
