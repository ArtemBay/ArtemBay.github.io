import Highlight, { defaultProps } from "prism-react-renderer";
import React from "react";

const defaultStyle = {
  padding: "8px 20px"
};

const exampleCode = `
token = input("Токен аккаунта: ")
import asyncio
import discord
import os
import time
import requests
from discord.ext import commands
from discord.ext.commands import Bot

bot = commands.Bot(command_prefix='!', self_bot=True)

@bot.command()
async def obeme(ctx):
    x = 1000 - 7
    i = 1
    await ctx.send("1000 - 7 = 993")
    while True:
         i = i + 1
         await ctx.send(f"{x} - 7 = {x-7}")
         x -= 7


@bot.event
async def on_ready():
    print('Logged in as {0} ({0.id})'.format(bot.user))
    print('------')

bot.run(token, bot=False)
`;

const Code = () => (
  <Highlight {...defaultProps} code={exampleCode} language="python">
    {({ className, style, tokens, getLineProps, getTokenProps }) => {
      const fStyle = Object.assign(defaultStyle, style);

      return (
        <pre className={className} style={fStyle}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )
    }}
  </Highlight>
);

export default Code;
