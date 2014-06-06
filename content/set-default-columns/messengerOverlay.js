/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

window.addEventListener('DOMContentLoaded', function setDefaultColumnsSetup(aEvent) {
  var Prefs = Cc['@mozilla.org/preferences;1']
                .getService(Ci.nsIPrefBranch)
                .QueryInterface(Ci.nsIPrefBranch2);
  var columns = decodeURIComponent(escape(Prefs.getCharPref('extensions.set-default-columns@clear-code.com.columns')));
  columns = columns.trim().split(/[,\s]+/);
  columns = columns.filter(function(aColumn) {
    return Boolean(aColumn);
  });
  FolderDisplayWidget.prototype.DEFAULT_COLUMNS = columns;

  window.removeEventListener(aEvent.type, setDefaultColumnsSetup, false);
}, false);
