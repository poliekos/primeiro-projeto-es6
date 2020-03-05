"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var list = /*#__PURE__*/function () {
  function list() {
    _classCallCheck(this, list);

    this.data = [];
  }

  _createClass(list, [{
    key: "add",
    value: function add(value) {
      this.data.push(value);
      console.log(this.data);
    }
  }, {
    key: "pop",
    value: function pop() {
      this.data.pop();
      this.print();
    }
  }, {
    key: "print",
    value: function print() {
      console.log(this.data);
    }
  }]);

  return list;
}();

var todoslist = /*#__PURE__*/function (_list) {
  _inherits(todoslist, _list);

  function todoslist() {
    _classCallCheck(this, todoslist);

    return _possibleConstructorReturn(this, _getPrototypeOf(todoslist).apply(this, arguments));
  }

  _createClass(todoslist, [{
    key: "print",
    value: function print() {
      console.log("IMprimindo todoslist");

      _get(_getPrototypeOf(todoslist.prototype), "print", this).call(this);
    }
  }]);

  return todoslist;
}(list);

var Math = /*#__PURE__*/function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, null, [{
    key: "soma",
    value: function soma(valueA, valueB) {
      return valueA + valueB;
    }
  }]);

  return Math;
}();

var minhalista = new todoslist();
console.log(Math.soma(5, 8));
var minhalista2 = new todoslist();

document.getElementById('novotodo').onclick = function () {
  minhalista.add('Antedigimon');
};

document.getElementById('remover').onclick = function () {
  minhalista.pop();
};
