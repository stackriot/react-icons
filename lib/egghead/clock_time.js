'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = require('react-icon-base');

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StackriotClockTime = function StackriotClockTime(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 18 18' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Page-1', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'ico_clock_time', fillRule: 'nonzero' },
                    _react2.default.createElement('path', { d: 'M8.99199976,1 C13.4160003,1 17,4.58399963 17,9 C17,13.4160003 13.4160003,17 8.99199976,17 C4.57600021,17 1,13.4160003 1,9 C1,4.58400001 4.57600021,1 8.99199976,1 Z M8.99199976,2 C5.13011936,2 2,5.13444872 2,9 C2,12.8655515 5.13011924,16 8.99199976,16 C12.8626325,16 16,12.8647977 16,9 C16,5.13520226 12.8626325,2 8.99199976,2 Z M9.5,5 L9.5,8.75024118 L13.2544333,10.9695773 L12.7455667,11.8304227 L8.5,9.32076576 L8.5,5 L9.5,5 Z' })
                )
            )
        )
    );
};

exports.default = StackriotClockTime;
module.exports = exports['default'];