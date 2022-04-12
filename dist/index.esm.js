import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import React from 'react';
import { jsx, Fragment } from 'react/jsx-runtime';

var ReactLaravelPagin = function ReactLaravelPagin(props) {
  var baseLink = props.baseLink,
      _props$headers = props.headers,
      headers = _props$headers === void 0 ? {} : _props$headers,
      setIsLoading = props.setIsLoading,
      dataPicker = props.dataPicker,
      setDataList = props.setDataList,
      customDots = props.customDots,
      _props$linkStyle = props.linkStyle,
      linkStyle = _props$linkStyle === void 0 ? function () {} : _props$linkStyle,
      customPrev = props.customPrev,
      customNext = props.customNext;

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      links = _React$useState2[0],
      setLinks = _React$useState2[1];

  var _React$useState3 = React.useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      url = _React$useState4[0],
      setUrl = _React$useState4[1];

  React.useEffect(function () {
    fetchData(url);
  }, [baseLink, url]);
  if (!baseLink || baseLink.trim().length < 1) return /*#__PURE__*/jsx("div", {});

  var fetchData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(url) {
      var results;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return fetch(url ? url : baseLink, {
                method: "GET",
                headers: headers
              });

            case 4:
              results = _context.sent;

              if (!results) {
                _context.next = 12;
                break;
              }

              _context.next = 8;
              return results.json();

            case 8:
              results = _context.sent;
              results = dataPicker(results); //pealing only the data we need!!

              console.log(results);

              if (results && results.data && results.links) {
                //   setDataList(results); //we have todo on this one!!
                setLinks(results.links || []);
                setDataList(results.data);
              } else {
                setDataList([]); //Just setting it as only empty array for the time being!!
              }

            case 12:
              _context.next = 16;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);

            case 16:
              setIsLoading(false);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 14]]);
    }));

    return function fetchData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/jsx("div", {
    children: links.map(function (_ref2) {
      var url = _ref2.url,
          label = _ref2.label,
          active = _ref2.active;
      if (customDots && label === "...") return /*#__PURE__*/jsx(Fragment, {
        children: customDots()
      });
      if (customPrev && label === "&laquo; Previous") return /*#__PURE__*/jsx(Fragment, {
        children: customPrev({
          onClick: function onClick() {
            if (url) {
              setUrl(url);
            }
          }
        })
      });
      if (customNext && label === "Next &raquo;") return /*#__PURE__*/jsx(Fragment, {
        children: customNext({
          onClick: function onClick() {
            if (url) {
              setUrl(url);
            }
          }
        })
      });
      return /*#__PURE__*/jsx(PageLink, {
        label: label,
        url: url,
        active: active,
        setUrl: setUrl,
        linkStyle: linkStyle
      }, label);
    })
  });
};

var PageLink = function PageLink(props) {
  var label = props.label,
      setUrl = props.setUrl,
      url = props.url,
      linkStyle = props.linkStyle,
      active = props.active;
  var styling = linkStyle ? linkStyle(active, label === "&laquo; Previous", label === "Next &raquo;") : "";
  return /*#__PURE__*/jsx("span", {
    className: "".concat(styling),
    onClick: function onClick() {
      if (url) {
        setUrl(url);
      }
    },
    children: label
  });
};

export { ReactLaravelPagin };
