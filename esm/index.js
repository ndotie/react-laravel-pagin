import React from 'react';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

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
  if (!baseLink || baseLink.trim().length < 1) return /*#__PURE__*/React.createElement("div", null);

  var fetchData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
      var results;
      return regeneratorRuntime.wrap(function _callee$(_context) {
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
                _context.next = 11;
                break;
              }

              _context.next = 8;
              return results.json();

            case 8:
              results = _context.sent;
              results = dataPicker(results); //pealing only the data we need!!

              if (results && results.data && results.links) {
                //   setDataList(results); //we have todo on this one!!
                setLinks(results.links || []);
                setDataList(results.data);
              } else {
                setDataList([]); //Just setting it as only empty array for the time being!!
              }

            case 11:
              _context.next = 15;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);

            case 15:
              setIsLoading(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));

    return function fetchData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement("div", null, links.map(function (_ref2) {
    var url = _ref2.url,
        label = _ref2.label,
        active = _ref2.active;
    if (customDots && label === "...") return /*#__PURE__*/React.createElement(React.Fragment, null, customDots());
    if (customPrev && label === "&laquo; Previous") return /*#__PURE__*/React.createElement(React.Fragment, null, customPrev({
      onClick: function onClick() {
        if (url) {
          setUrl(url);
        }
      }
    }));
    if (customNext && label === "Next &raquo;") return /*#__PURE__*/React.createElement(React.Fragment, null, customNext({
      onClick: function onClick() {
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

var PageLink = function PageLink(props) {
  var label = props.label,
      setUrl = props.setUrl,
      url = props.url,
      linkStyle = props.linkStyle,
      active = props.active;
  var styling = linkStyle ? linkStyle(active, label === "&laquo; Previous", label === "Next &raquo;") : "";
  return /*#__PURE__*/React.createElement("span", {
    className: "".concat(styling),
    onClick: function onClick() {
      if (url) {
        setUrl(url);
      }
    }
  }, label);
};

export { ReactLaravelPagin };
//# sourceMappingURL=index.js.map
