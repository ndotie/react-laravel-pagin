"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactLaravelPagin = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.promise.js");

var _axios = _interopRequireDefault(require("axios"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReactLaravelPagin = props => {
  const {
    baseLink,
    headers = {},
    setIsLoading,
    dataPicker,
    setDataList,
    customDots,
    linkStyle = () => {},
    customPrev,
    customNext
  } = props;
  const [links, setLinks] = (0, _react.useState)([]);
  const [url, setUrl] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    fetchData(url);
  }, [baseLink, url]);
  if (!baseLink || baseLink.trim().length < 1) return /*#__PURE__*/React.createElement("div", null);

  const fetchData = async url => {
    setIsLoading(true);

    try {
      let results = await _axios.default.get(url ? url : baseLink, headers);

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
    } catch (ex) {//   console.log(ex);
    }

    setIsLoading(false);
  };

  return /*#__PURE__*/React.createElement("div", null, links.map(_ref => {
    let {
      url,
      label,
      active
    } = _ref;
    if (customDots && label === "...") return /*#__PURE__*/React.createElement(React.Fragment, null, customDots());
    if (customPrev && label === "&laquo; Previous") return /*#__PURE__*/React.createElement(React.Fragment, null, customPrev({
      onClick: () => {
        if (url) {
          setUrl(url);
        }
      }
    }));
    if (customNext && label === "Next &raquo;") return /*#__PURE__*/React.createElement(React.Fragment, null, customNext({
      onClick: () => {
        if (url) {
          setUrl(url);
        }
      }
    }));
    return /*#__PURE__*/React.createElement(PageLink, {
      key: label,
      label: label,
      url: url,
      active: active,
      setUrl: setUrl,
      linkStyle: linkStyle
    });
  }));
};

exports.ReactLaravelPagin = ReactLaravelPagin;

const PageLink = props => {
  const {
    label,
    setUrl,
    url,
    linkStyle,
    active
  } = props;
  const styling = linkStyle ? linkStyle(active, label === "&laquo; Previous", label === "Next &raquo;") : "";
  return /*#__PURE__*/React.createElement("span", {
    className: "".concat(styling),
    onClick: () => {
      if (url) {
        setUrl(url);
      }
    }
  }, label);
};