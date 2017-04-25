set-default-columns
===================

Provides ability to set default visibility of columns in the thread pane.

By default, Thunderbird shows following columns for newly detected folders.

 * threadCol
 * attachmentCol
 * flaggedCol
 * subjectCol
 * unreadButtonColHeader
 * correspondentCol
 * senderCol
 * recipientCol
 * junkStatusCol
 * dateCol
 * locationCol

However, even if you want that the "Priority" column is shown for all folders, for all users, there is no way.
This addon provides a preference entry to customize the list of default visible columns of all folders.
For example, if you want the column "Priority" is visible by default, then you'll put a directive into your MCD configuration file, like:

    lockPref("extensions.set-default-columns@clear-code.com.columns", [
      "priorityCol",
      "threadCol",
      ...list of other default columns...
      "locationCol"
    ].join(","));

And, you'll rearrange default columns via `extensions.set-default-columns@clear-code.com.columns`.

This is mainly designed for corporate-use.
