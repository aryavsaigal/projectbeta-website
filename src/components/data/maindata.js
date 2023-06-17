// maindata consolidates all small frequently modified data used throughout the site

// You would still need to modify other bigger parts of the data for the site
// stored in other files

export const maindata = {
  current_year: "2022",

  event_starting_date: "Aug 7, 2022 00:00:00", // Target timestamp for taskbar countdown timer
  event_date_range: "07|08|2022 - 13|08|2022", // Date range displayed above registration links
  // Do not change the formatting of the date of the above two fields

  registration_link: "https://forms.gle/hX8SZ9T5UXQeaJ72A",
  discord_link: "https://discord.gg/h9FJkvcJWt",

  notif_recent_expiry_duration: 3, // Days for which new notifications are marked recent in panel

  phone_record: [
    // Format: "Name - Designation", "91 XXXXX XXXXX", "Discord username (Optional)"

    ["Simar Tandon - President", "91 98715 99988", "critto#3569"], // President
    ["Aadi Jain - Vice President", "91 97735 00570"], // Vice President
    ["Adit Magotra - Secretary", "91 99588 77036", "The_AlphaLaser#0227"], // Secretary
    ["Anuja Mittal - Faculty In-charge", "91 99539 5074"], // Faculty In-charge
    ["Ruchi Mehra - Faculty In-charge", "91 98110 89272"], // Faculty In-charge

    // Do not try to add, remove or rearrange the arrays of designations since
    // their allocations are fixed in the front-end of the page
  ],
};
