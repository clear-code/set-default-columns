set-default-columns
===================

スレッドペインの既定のカラムを変更する機能を提供します。

初期状態で、Thunderbirdは新しく認識したフォルダについて以下のカラムを表示します。

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

しかしながら、「重要度」のようなカラムをすべてのフォルダですべてのユーザについて表示したいと思っても、それを実現する方法はありません。
このアドオンは、すべてのフォルダについての既定の表示カラムを定義する設定項目を提供します。
例えば、「重要度」のカラムを初期状態で表示させたい場合は、MCD用設定ファイルに以下のようなディレクティブを書き加えます:

    lockPref("extensions.set-default-columns@clear-code.com.columns", [
      "priorityCol",
      "threadCol",
      ...他の既定のカラムの一覧...
      "locationCol"
    ].join(","));

また、同様の形式で `extensions.set-default-columns@clear-code.com.order` を設定すると、既定の並び順も変える事ができます。
`extensions.set-default-columns@clear-code.com.columns` はあくまで表示するかどうかを指定するもので、`extensions.set-default-columns@clear-code.com.order` を指定しなかった場合の既定の並び順については保証されません。

このアドオンは主に企業利用を想定して開発されています。

備考
----

カラムリストは以下の通りです。

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

指定したカラムが表示されない場合があります。既定では `senderCol` と `recipientCol` カラムは追加の設定を行わないと表示されないようになっています。

これらのカラムを有効にするための設定:

    lockPref("mail.threadpane.use_correspondents", false);

上記の設定により、 `correspondentCol` (通信相手) カラムの代わりに `senderCol` (差出人) カラムが 受信トレイ (`Inbox`)に、`recipientCol` (受信者) カラムが `送信トレイ` (`Sent`)に表示されます。
