export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (name) => (
      <p style={{ display: "inline" }} id={name.replaceAll(" ", "-")}>
        {name}
      </p>
    ),
    width: "20%",
  },
  {
    title: "Address",
    dataIndex: "formatted_address",
    key: "address",
    render: (address) => {
      return (
        <a
          href={"https://www.google.com/maps/dir/?api=1&destination=" + address}
          target="_blank"
          rel="noreferrer"
        >
          {address}
        </a>
      );
    },
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    sorter: (a, b) => a.rating - b.rating,
    width: "10%",
  },
  {
    title: "Price",
    dataIndex: "price_level",
    key: "price",
    render: (priceLevelStr) => {
      const priceLevelNum = parseInt(priceLevelStr);
      let output = "";
      for (let i = 0; i < priceLevelNum; i++) {
        output += "$";
      }
      return output;
    },
    sorter: (a, b) => b.price_level - a.price_level,
    width: "10%",
  },
  {
    title: "Link",
    dataIndex: "website",
    key: "url",
    render: (link) => {
      if (link === undefined) return "";
      return (
        <a href={link} target="_blank" rel="noreferrer">
          Website
        </a>
      );
    },
    width: "10%",
  },
  {
    title: "Phone",
    dataIndex: "formatted_phone_number",
    key: "phone",
    render: (number) => <a href={"tel:" + number}>{number}</a>,
    width: "15%",
  },
];
