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

var EggheadHelp = function EggheadHelp(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 24 24' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'g',
                { id: 'Symbols', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'icon/questionmark' },
                    _react2.default.createElement(
                        'g',
                        { id: 'ico_help' },
                        _react2.default.createElement('path', { d: 'M0,12 C0,5.37112582 5.372583,0 12,0 C18.6288742,0 24,5.372583 24,12 C24,18.6288742 18.627417,24 12,24 C5.37112582,24 0,18.627417 0,12 Z M10.4746667,17.5171875 C10.4746667,18.1314375 10.785,18.455625 11.373,18.455625 L12.157,18.455625 C12.745,18.455625 13.0553333,18.1314375 13.0553333,17.5171875 L13.0553333,16.8346875 C13.0553333,16.2204375 12.745,15.89625 12.157,15.89625 L11.373,15.89625 C10.785,15.89625 10.4746667,16.2204375 10.4746667,16.8346875 L10.4746667,17.5171875 Z M11.3076667,14.6848125 L12.2386667,14.6848125 C12.745,14.6848125 12.9736667,14.53125 13.088,14.0705625 L13.137,13.8658125 C13.4473333,12.5349375 15.9136667,11.93775 15.9136667,9.34425 C15.9136667,7.1431875 13.9373333,6 12.108,6 C10.883,6 9.96833333,6.443625 9.39666667,6.8360625 C8.90666667,7.16025 8.923,7.5868125 9.24966667,8.081625 L9.64166667,8.695875 C9.952,9.173625 10.4583333,9.173625 10.9646667,8.9176875 C11.226,8.7811875 11.52,8.6788125 11.814,8.6788125 C12.4346667,8.6788125 12.9736667,9.105375 12.9736667,9.6855 C12.9736667,11.016375 10.4093333,11.767125 10.4093333,13.57575 L10.4093333,13.746375 C10.4093333,14.360625 10.7196667,14.6848125 11.3076667,14.6848125 Z' })
                    )
                )
            )
        )
    );
};

exports.default = EggheadHelp;
module.exports = exports['default'];