const { SlashCommand } = require('slash-create');
const low = require('lowdb');
const IDS = require('../../../../../BASE/personels.json');
module.exports = class AvatarCommand extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: 'tag',
            description: 'Sunucunun tagını gösterir',
            deferEphemeral: false,
            guildIDs: [IDS.guild],
            throttling: {
                duration: 10,
                usages: 1
            }
        });

        this.filePath = __filename;
    }

    async run(ctx) {
        await this.creator.syncCommandPermissions();
        const client = ctx.creator.client;
        const utils = await low(client.adapters('utils'));
        const roles = await low(client.adapters('roles'));
        const channels = await low(client.adapters('channels'));
        const emojis = await low(client.adapters('emojis'));
        await ctx.send(client.config.tag[0]);
    }
}
