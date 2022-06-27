import stock_photo from "../../images/team/stock-photo.jpg";

export default function EventsFolder() {
  return {
    board: [
      {
        name: "John Doe",
        title: "President",
        hod: "Department 1",
        img_src: stock_photo,
      },
      {
        name: "John Doe",
        title: "Vice President",
        hod: "Department 2",
        img_src: stock_photo,
      },
      {
        name: "John Doe",
        title: "Secretary",
        hod: "Department 2",
        img_src: stock_photo,
      },
    ],
    core: [
      {
        name: "John Doe",
        hod: "Department 3",
        img_src: stock_photo,
      },
      {
        name: "John Doe",
        hod: "Department 4",
        img_src: stock_photo,
      },
      {
        name: "John Doe",
        hod: "Department 5",
        img_src: stock_photo,
      },
      {
        name: "John Doe",
        hod: "Department 6",
        img_src: stock_photo,
      },
    ],
    members: ["John Doe", "John Doe", "John Doe", "John Doe"],
  };
}
