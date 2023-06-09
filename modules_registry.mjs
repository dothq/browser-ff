/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Modules registry used to define the origin file for typing modules imported using Cu.
 */
const registry = {
	NavigationHelper: "components/navigation/NavigationHelper.sys.mjs",
	StartPage: "components/startpage/StartPage.sys.mjs"
};

export default registry;