set-default-columns
===================

Provides ability to set default visibility of columns in the thread pane.

By default, Thunderbird shows following columns for new folders.

 * threadCol
 * attachmentCol
 * flaggedCol
 * subjectCol
 * unreadButtonColHeader
 * senderCol
 * recipientCol
 * junkStatusCol
 * dateCol
 * locationCol

However, even if you want that the "Priority" column is shown for all folders, for all users, there is no way.
This addon provides a preference entry to customize the list of default visible columns of all folders.
For example, if you want the column "Priority" is visible by default, then:

    lockPref("extensions.set-default-columns@clear-code.com.columns",
      "priorityCol,...(list of other default columns)...");

This is mainly designed for corporate-use.
