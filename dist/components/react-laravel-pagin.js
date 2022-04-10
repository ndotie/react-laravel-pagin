"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactLaravelPagin = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.promise.js");

var _axios = _interopRequireDefault(require("axios"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  if (!baseLink || baseLink.trim().length < 1) return /*#__PURE__*/_react.default.createElement("div", null);

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

  return /*#__PURE__*/_react.default.createElement("div", null, links.map(_ref => {
    let {
      url,
      label,
      active
    } = _ref;
    if (customDots && label === "...") return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, customDots());
    if (customPrev && label === "&laquo; Previous") return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, customPrev({
      onClick: () => {
        if (url) {
          setUrl(url);
        }
      }
    }));
    if (customNext && label === "Next &raquo;") return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, customNext({
      onClick: () => {
        if (url) {
          setUrl(url);
        }
      }
    }));
    return /*#__PURE__*/_react.default.createElement(PageLink, {
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
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(styling),
    onClick: () => {
      if (url) {
        setUrl(url);
      }
    }
  }, label);
};