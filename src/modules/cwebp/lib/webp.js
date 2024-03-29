// Generated by CoffeeScript 1.12.7
var CWebp, DWebp, Wrapper, compile, methods, mixin, ref,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('./utils'), mixin = ref.mixin, compile = ref.compile;

Wrapper = require('./wrapper');

methods = require('../methods');

exports.CWebp = CWebp = (function(superClass) {
  extend(CWebp, superClass);

  mixin(CWebp, compile(methods.global));

  mixin(CWebp, compile(methods.cwebp));

  CWebp.bin = 'cwebp';

  CWebp.verbose = false;

  function CWebp(source, bin) {
    if (!(this instanceof CWebp)) {
      return new CWebp(source, bin);
    }
    CWebp.__super__.constructor.apply(this, arguments);
    if (this.constructor.verbose) {
      this._args.v = [];
    }
  }

  return CWebp;

})(Wrapper);

exports.DWebp = DWebp = (function(superClass) {
  extend(DWebp, superClass);

  mixin(DWebp, compile(methods.global));

  mixin(DWebp, compile(methods.dwebp));

  DWebp.bin = 'dwebp';

  function DWebp(source, bin) {
    if (!(this instanceof DWebp)) {
      return new DWebp(source, bin);
    }
    DWebp.__super__.constructor.apply(this, arguments);
  }

  return DWebp;

})(Wrapper);
