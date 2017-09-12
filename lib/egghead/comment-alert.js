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

var EggheadCommentAlert = function EggheadCommentAlert(props) {
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
                    { id: 'Action-Cards', transform: 'translate(-898.000000, -369.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: '\uFF1Fbutton_askforchanges', transform: 'translate(890.000000, 363.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'ico_askforchanges', transform: 'translate(8.000000, 6.000000)' },
                            _react2.default.createElement(
                                'g',
                                null,
                                _react2.default.createElement('path', { d: 'M19.2,3 L4.8,3 C3.81000008,3 3.00899999,3.81000008 3.00899999,4.8 L3,21 L6.6,17.4 L19.2,17.4 C20.1900003,17.4 21,16.5900003 21,15.6 L21,4.8 C21,3.81000008 20.1900003,3 19.2,3 Z M13,11 L11,11 L11,6 L13,6 L13,11 Z M13,14 L11,14 L11,12 L13,12 L13,14 Z' })
                            )
                        )
                    )
                )
            )
        )
    );
};

exports.default = EggheadCommentAlert;
module.exports = exports['default'];