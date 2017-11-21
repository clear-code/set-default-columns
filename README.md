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

And, you'll rearrange default columns via `extensions.set-default-columns@clear-code.com.order`. The format of its value is same to `extensions.set-default-columns@clear-code.com.columns`.

Note that there is nothing to do with `extensions.set-default-columns@clear-code.com.order` about order of default columns. Without `extensions.set-default-columns@clear-code.com.order` preference, it is not guaranteed.

This is mainly designed for corporate-use.

Note
----

Here is the list of default columns.

 * threadCol
 * flaggedCol
 * attachmentCol
 * subjectCol
 * unreadButtonColHeader
 * senderCol
 * recipientCol
 * correspondentCol
 * junkStatusCol
 * receivedCol
 * dateCol
 * statusCol
 * sizeCol
 * tagsCol
 * accountCol
 * priorityCol
 * unreadCol
 * totalCol
 * locationCol
 * idCol

Note that there is a case that specified columns are not shown. By default, `senderCol` and `recipientCol` column are not shown without additional configuration setting.

Here is the setting to enable these columns:

    lockPref("mail.threadpane.use_correspondents", false);

With above setting, instead of `correspondentCol` column, `senderCol` column is shown in `Inbox` folder and `recipientCol` column is shown in `Sent` folder.
