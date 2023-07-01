export const DateToStr = (dateObj) => {
    const date = `${dateObj.getDate()} / ${
      dateObj.getMonth() + 1
    } / ${dateObj.getFullYear()}`;

    return date;
  };