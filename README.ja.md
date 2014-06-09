set-default-columns
===================

スレッドペインの既定のカラムを変更する機能を提供します。

初期状態で、Thundebrirdは新しく認識したフォルダについて以下のカラムを表示します。

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

しかしながら、「重要度」のようなカラムをすべてのフォルダですべてのユーザについて表示したいと思っても、それを実現する方法はありません。
このアドオンは、すべてのフォルダについての既定の表示カラムを定義する設定項目を提供します。
例えば、「重要度」のカラムを初期状態で表示させたい場合は、MCD用設定ファイルに以下のようなディレクティブを書き加えます:

    lockPref("extensions.set-default-columns@clear-code.com.columns", [
      "priorityCol",
      "threadCol",
      ...他の既定のカラムの一覧...
      "locationCol"
    ].join(","));

このアドオンは主に企業利用を想定して開発されています。
