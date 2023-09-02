const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'admin',
    description: 'Xem Info Admin',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`${client.user.username}'s admin\``)
            .setDescription(`\`\`\`ini\n[ 🔽 Name : Nguyen Duc KienxNguyen Van Hoan ]\n\`\`\`
                             \`\`\`ini\n[ 💍 Age : 19x16 ]\n\`\`\`                                               
                             \`\`\`ini\n[ 📱 Phone : Update.... ]\n\`\`\`
                             \`\`\`ini\n[ 💒 City : Ninh Binh ]\n\`\`\`
                             \`\`\`ini\n[ 👉 Hobbies : Listen to Music, Watch anime,.. ]\n\`\`\`
                             \`\`\`ini\n[ 💚 Crush Name : N(Meadow) ]\n\`\`\`
                             \`\`\`ini\n[ 🔗 Facebook  : Update.... ]\n\`\`\`
                             \`\`\`ini\n[ 📌 Github  : Update.... ]\n\`\`\`
                             \`\`\`ini\n[ 🎧 Music  : Baby co nho den toi.. ]\n\`\`\`



`)
            .setColor("RANDOM")
            .setFooter({ text: "© » NguyenDucKien#8714" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};