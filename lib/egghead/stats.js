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

var StackriotStats = function StackriotStats(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 24 24' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Admin', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'Group-30', transform: 'translate(-194.000000, -23.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group-31', transform: 'translate(194.000000, 23.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'Page-1' },
                            _react2.default.createElement('path', { d: 'M18.9999989,2.99999982 L4.9999997,2.99999982 C3.89999986,2.99999982 2.99999982,3.89999986 2.99999982,4.9999997 L2.99999982,18.9999989 C2.99999982,20.0999991 3.89999986,20.9999987 4.9999997,20.9999987 L18.9999989,20.9999987 C20.0999991,20.9999987 20.9999987,20.0999991 20.9999987,18.9999989 L20.9999987,4.9999997 C20.9999987,3.89999986 20.0999991,2.99999982 18.9999989,2.99999982 Z M8.99999946,16.999999 L6.99999958,16.999999 L6.99999958,9.9999994 L8.99999946,9.9999994 L8.99999946,16.999999 Z M12.9999992,16.999999 L10.9999993,16.999999 L10.9999993,6.99999958 L12.9999992,6.99999958 L12.9999992,16.999999 Z M16.999999,16.999999 L14.9999991,16.999999 L14.9999991,12.9999992 L16.999999,12.9999992 L16.999999,16.999999 Z', id: 'stats' })
                        )
                    )
                )
            )
        )
    );
};

exports.default = StackriotStats;
module.exports = exports['default'];