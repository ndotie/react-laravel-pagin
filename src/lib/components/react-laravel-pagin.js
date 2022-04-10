import axios from "axios";
import React, { useEffect, useState } from "react";

export const ReactLaravelPagin = (props) => {
  const {
    baseLink,
    headers = {},
    setIsLoading,
    dataPicker,
    setDataList,
    customDots,
    linkStyle = () => {},
    customPrev,
    customNext,
  } = props;
  const [links, setLinks] = useState([]);
  const [url, setUrl] = useState();
  useEffect(() => {
    fetchData(url);
  }, [baseLink, url]);
  if (!baseLink || baseLink.trim().length < 1) return <div />;
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      let results = await axios.get(url ? url : baseLink, headers);
      if (results && results.data) {
        results = dataPicker(results.data); //pealing only the data we need!!
        console.log(results);
        if (results && results.data && results.links) {
          //   setDataList(results); //we have todo on this one!!
          setLinks(results.links || []);
          setDataList(results.data);
        } else {
          setDataList([]); //Just setting it as only empty array for the time being!!
        }
      }
    } catch (ex) {
      //   console.log(ex);
    }
    setIsLoading(false);
  };
  return (
    <div>
      {links.map(({ url, label, active }) => {
        if (customDots && label === "...") return <>{customDots()}</>;
        if (customPrev && label === "&laquo; Previous")
          return (
            <>
              {customPrev({
                onClick: () => {
                  if (url) {
                    setUrl(url);
                  }
                },
              })}
            </>
          );
        if (customNext && label === "Next &raquo;")
          return (
            <>
              {customNext({
                onClick: () => {
                  if (url) {
                    setUrl(url);
                  }
                },
              })}
            </>
          );

        return (
          <PageLink
            key={label}
            label={label}
            url={url}
            active={active}
            setUrl={setUrl}
            linkStyle={linkStyle}
          />
        );
      })}
    </div>
  );
};

const PageLink = (props) => {
  const { label, setUrl, url, linkStyle, active } = props;

  const styling = linkStyle
    ? linkStyle(active, label === "&laquo; Previous", label === "Next &raquo;")
    : "";
  return (
    <span
      className={`${styling}`}
      onClick={() => {
        if (url) {
          setUrl(url);
        }
      }}
    >
      {label}
    </span>
  );
};
