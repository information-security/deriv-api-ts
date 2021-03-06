import debug from 'debug';

const APP_NAME = 'deriv-api-ts';

export default class Logger
{
	_level: debug.Debugger;
	_trace: debug.Debugger;
	_debug: debug.Debugger;
	_info: debug.Debugger;
	_warn: debug.Debugger;
	_error: debug.Debugger;
	_fatal: debug.Debugger;
	constructor(prefix?: string)
	{
		if (prefix)
		{
			this._level = debug(`${APP_NAME}:LEVEL:${prefix}`);
			this._trace = debug(`${APP_NAME}:TRACE:${prefix}`);
			this._debug = debug(`${APP_NAME}:${prefix}`);
			this._info = debug(`${APP_NAME}:INFO:${prefix}`);
			this._warn = debug(`${APP_NAME}:WARN:${prefix}`);
			this._error = debug(`${APP_NAME}:ERROR:${prefix}`);
			this._fatal = debug(`${APP_NAME}:FATAL:${prefix}`);
		}
		else
		{
			this._level = debug(`${APP_NAME}:LEVEL`);
			this._trace = debug(`${APP_NAME}:TRACE`);
			this._debug = debug(APP_NAME);
			this._info = debug(`${APP_NAME}:INFO`);
			this._warn = debug(`${APP_NAME}:WARN`);
			this._error = debug(`${APP_NAME}:ERROR`);
			this._fatal = debug(`${APP_NAME}:FATAL`);
		}

		/* eslint-disable no-console */
		this._level.log = console.info.bind(console);
		this._trace.log = console.trace.bind(console);
		this._debug.log = console.debug.bind(console);
		this._info.log = console.info.bind(console);
		this._warn.log = console.warn.bind(console);
		this._error.log = console.error.bind(console);
		this._fatal.log = console.error.bind(console);
		/* eslint-enable no-console */
	}

	get level(): debug.Debugger
	{
		return this._level;
	}

	get trace(): debug.Debugger
	{
		return this._trace;
	}

	get debug(): debug.Debugger
	{
		return this._debug;
	}

	get info(): debug.Debugger
	{
		return this._info;
	}

	get warn(): debug.Debugger
	{
		return this._warn;
	}

	get error(): debug.Debugger
	{
		return this._error;
	}

	get fatal(): debug.Debugger
	{
		return this._fatal;
	}
}
