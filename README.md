# patch-diff

[![NPM Version](http://img.shields.io/npm/v/patch-diff.svg?style=flat)](https://www.npmjs.org/package/patch-diff) [![Build Status](https://travis-ci.org/storkjs/patch-diff.svg)](http://travis-ci.org/storkjs/patch-diff) [![Coverage Status](https://coveralls.io/repos/storkjs/patch-diff/badge.svg)](https://coveralls.io/r/storkjs/patch-diff) [![bitHound Code](https://www.bithound.io/github/storkjs/patch-diff/badges/code.svg)](https://www.bithound.io/github/storkjs/patch-diff)<br>
[![License](https://img.shields.io/npm/l/patch-diff.svg?style=flat)](https://github.com/storkjs/patch-diff/blob/master/LICENSE) [![Total Downloads](https://img.shields.io/npm/dt/patch-diff.svg?style=flat)](https://www.npmjs.org/package/patch-diff) [![Dependency Status](https://david-dm.org/storkjs/patch-diff.svg)](https://david-dm.org/storkjs/patch-diff) [![devDependency Status](https://david-dm.org/storkjs/patch-diff/dev-status.svg)](https://david-dm.org/storkjs/patch-diff#info=devDependencies)<br>
[![Retire Status](http://retire.insecurity.today/api/image?uri=https://raw.githubusercontent.com/storkjs/patch-diff/master/package.json)](http://retire.insecurity.today/api/image?uri=https://raw.githubusercontent.com/storkjs/patch-diff/master/package.json)

> Emits diff events.

## Installation

## usage

a `PatchDiff` instance wraps an object

It has the following api:
- `patcher.get(path)` - returns the value at path of object (json path), this is a reference
- `patcher.remove(path)` - removes the value at path
- `patcher.apply(patch, path)` - this is the most important one, it allows you to patch the wrapped object with partial object (the patch)

the patch structure should be the same on a specific path, undefined values are ignored while every other is treated as assiginemnts

## Concepts

### This Library is currently in initial development!
