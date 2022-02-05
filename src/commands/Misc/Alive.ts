import { MessageType, Mimetype } from '@adiwajshing/baileys'

import { join } from 'path'

import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'alive',

            description: 'check if the bot is online.',

            category: 'misc',

            usage: `${client.config.prefix}hi`

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        const n = [

            './assets/Rin/rin-hi.mp4'

        ]

        let rin = n[Math.floor(Math.random() * n.length)]

        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,

            mimetype: Mimetype.gif,

            caption: `hey there am alive!am 𝟡𝟡𝟡𝐛𝐨𝐭𝐭𝐨 use /help to check my command list ? \n` }

        )

    }

}

          

       

    

        

           

           

            

            

        

    

    

        

           

           

           

   
