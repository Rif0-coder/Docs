# События плагинов

С версии 1.6.3 пакет приобрёл **события плагинов** и научился запоминать **код ответа сервера** при обращении к УРЛ.

Это круто по ряду причин:

- Можно внедрить свою логику в процесс парсинга,
- Можно совершать кастомные действия на сайте, в зависимости от получаемых данных при парсинге,
- К примеру, если сервер отдал 301/302 редирект или 404 ошибку при обращении к УРЛу подзадания, то мы можем отключить этот ресурс с публикации вовсе.
- Всё ограничивается вашей фантазией!

_Список событий прописан в порядке их исполнения при работе компонента._

- [xParserOnFilterSourceItems](/components/xparser/events/xparseronfiltersourceitems)
- [xParserOnBeforeTaskParse](/components/xparser/events/xparseronbeforetaskparse)
- [xParserOnTaskItemParse](/components/xparser/events/xparserontaskitemparse)
- [xParserOnAfterPagesCollected](/components/xparser/events/xparseronafterpagescollected)
- [xParserOnBeforeTaskActions](/components/xparser/events/xparseronbeforetaskactions)
- [xParserOnTaskRowsPrepared](/components/xparser/events/xparserontaskrowsprepared)
- [xParserOnTaskParseDone](/components/xparser/events/xparserontaskparsedone)
- [Примеры](/components/xparser/events/examples)
