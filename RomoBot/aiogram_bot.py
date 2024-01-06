import aiogram.utils.markdown as md
from aiogram import Bot, Dispatcher, types
from aiogram.contrib.middlewares.logging import LoggingMiddleware
from aiogram.types import ParseMode
from aiogram.types.web_app_info import WebAppInfo
from aiogram import executor
import config as cfg

bot = Bot(token=cfg.TOKEN)
dp = Dispatcher(bot)


@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('OrKpbith Be6 cTpaHvuy', web_app=WebAppInfo(url='https://fxfd24.github.io/RomoBot/index.html')))
    await bot.send_message(message.from_user.id,f"<b>Это Ромобот</b>\n💎 ", parse_mode=types.ParseMode.HTML, reply_markup = markup)

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)