set-default-columns
===================

Provides ability to set default visibility of columns in the thread pane.
For example, if you want the column "priority" to the default columns, then:

    lockPref("extensions.set-default-columns@clear-code.com.columns",
      "priorityCol,threadCol,attachmentCol,flaggedCol,subjectCol,unreadButtonColHeader,senderCol,recipientCol,junkStatusCol,dateCol,locationCol");

The default value is:

    pref("extensions.set-default-columns@clear-code.com.columns",
      "threadCol,attachmentCol,flaggedCol,subjectCol,unreadButtonColHeader,senderCol,recipientCol,junkStatusCol,dateCol,locationCol");

