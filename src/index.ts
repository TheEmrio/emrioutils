import * as arr from './arr'
import { debug, Debugger } from './debug'
import * as fs from './fs'
import * as math from './math'
import * as misc from './misc'
import * as obj from './obj'
import * as rnd from './rnd'
import * as str from './str'
import * as time from './time'

const u = { arr, debug, Debugger, fs, math, misc, obj, rnd, str, time }
export const ularge = { ...u, ...arr, ...fs, ...math, ...misc, ...obj, ...rnd, ...str, ...time }
export default ularge
