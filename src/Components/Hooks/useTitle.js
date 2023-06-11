import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Desh Career`;
  }, [title]);
};

export default useTitle;
