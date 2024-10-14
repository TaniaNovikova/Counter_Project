Из улучшений - добавить overflow: hidden для дисплея
Еще на dafont.com нашел кастомный шрифт, который иммитирует сегментный дисплей, как у старых калькуляторов.
1) Создать в проекте папку fonts
2) закинуть в нее все из архива выше
https://www.dafont.com/chess-7-chess-7.d1833

3) В css добавить: @font-face {
  font-family: 'Digital7';
  src: url('fonts/digital-7.ttf');
}
4) Шрифт дисплея изменить на font-family: 'Digital7', monospace;
5) подрегулировать размер если нужно
mew