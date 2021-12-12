/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const FluentReact = require("@fluent/react/index.js");
import { exportPublic } from "../shared/globals";

export const ChromeUtils = {
    ...window.ChromeUtils,
    defineModuleGetter(
        owner: any,
        moduleName: string,
        moduleUri: string
    ) {
        const mod =
            window.ChromeUtils.import(moduleUri)[
                moduleName
            ];
        owner[moduleName] = mod;

        return { [moduleName]: mod };
    }
};

export const Components = window.Components;

export const Cr = window.Cr;
export const Cu = window.Cu;

const include = (moduleUri: string) => {
    const moduleName = moduleUri
        .split("/")
        [moduleUri.split("/").length - 1].split(".")[0];

    const mod = ChromeUtils.import(moduleUri);
    const data = mod[moduleName];

    exportPublic(moduleName, data);

    return mod;
};

/*
    Only core modules should be added here.

    Core modules will be available in the Browser Toolbox by calling the module
    name in the console.

    Import your modules lazily in the app using ChromeUtils.import() if needed.
*/
export const { Services } = include(
    "resource://gre/modules/Services.jsm"
);
export const { AppConstants } = include(
    "resource://gre/modules/AppConstants.jsm"
);

export const Ci = (window as any).Ci;
export const Cc = (window as any).Cc;

export const { LightweightThemeConsumer } = include(
    "resource://gre/modules/LightweightThemeConsumer.jsm"
);
export const { E10SUtils } = include(
    "resource://gre/modules/E10SUtils.jsm"
);
export const { ActorManagerParent } = include(
    "resource://gre/modules/ActorManagerParent.jsm"
);
export const { AddonManager } = include(
    "resource://gre/modules/AddonManager.jsm"
);

export const { BrowserWindowTracker } = include(
    "resource:///modules/BrowserWindowTracker.jsm"
);

export const { NetUtil } = include(
    "resource://gre/modules/NetUtil.jsm"
);

export const { AboutPagesUtils } = include(
    "resource://gre/modules/AboutPagesUtils.jsm"
);

export const { PrivateBrowsingUtils } = include(
    "resource://gre/modules/PrivateBrowsingUtils.jsm"
);

export const { SitePermissions } = include(
    "resource:///modules/SitePermissions.jsm"
);

export const { OS } = include(
    "resource://gre/modules/osfile.jsm"
);
export const { FileUtils } = include(
    "resource://gre/modules/FileUtils.jsm"
);

export const { SiteDataManager } = include(
    "resource:///modules/SiteDataManager.jsm"
);

export const { Sqlite } = include(
    "resource://gre/modules/Sqlite.jsm"
);

export const { AsyncShutdown } = include(
    "resource://gre/modules/AsyncShutdown.jsm"
);

export const { PageThumbs } = include(
    "resource://gre/modules/PageThumbs.jsm"
);

export const nsIBrowserHandler = Cc[
    "@mozilla.org/browser/clh;1"
].getService(Ci.nsIBrowserHandler);

exportPublic("FluentReact", FluentReact);

const { XPCOMUtils } = ChromeUtils.import(
    "resource://gre/modules/XPCOMUtils.jsm"
);

export const ReferrerInfo = Components.Constructor(
    "@mozilla.org/referrer-info;1",
    "nsIReferrerInfo",
    "init"
);

export const { ContentCrashHandlers } =
    ChromeUtils.import(
        "resource:///modules/ContentCrashHandlers.jsm"
    );

export const { ShortcutUtils } = ChromeUtils.import(
    "resource://gre/modules/ShortcutUtils.jsm"
);
