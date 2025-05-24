/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU2ZKiSBT9l3zVaDYRMaIiBhAVlcV9mZiHFBJIZavMBMEOf2l+Yn5sAquqqx9memrecr333HPOvd9BlmOK5qgBw++gILiCDLVL1hQIDIFehiEioAsCyCAYAntsyZcILbzOQkL33kWZzLdNpEn5JbaNSlslx/410wWX2/Ev4NEFRXlOsP+LgOPTnvVVbNueuF4UVJP3qH7Vi1Pknf25lMckP3sclaPXtPcCHm1EiAnOIrOIUYoITOao8SAmX4Ofmp2QKMbIXogbEvRvCj+a+0lpjXdYnfGqW3tYpjNmT8bXr8E3vKN7cIMSGeYOzWZiovC3qT1YEGtpbxjxTclk5z1HE+H2Bp/iKEOBFaCMYdZ8mXfNWo7hkR7qYyXSOh24r9o6mKm6Io6Diz7hBNF39Hhk1ib9InCrNymLa2eqxDjQljhcyVuP3qz7Sbe5yhoJQhrh61Jy1tufgXvkwyvX/8M7mpzu9oVsZ6d91blcZhO6n23VkcqHabDBkWMhhz8EqV2l/tfgl+u14GZ+zRhXawMn2jSnAVfaF5qUu5qu3OtaFldSdHVX1id8yEryK5Ri7JkjXndJPB3N3eMiLJKxhmqvgPmikyq709GJDo3is6bW1JSaan9C3WXvHk6mwX2skiDGJXsVl0avlyR9b1OdEYq1l2dFV9RYARgKjy4gKMKUEchwnj3PpH4XwKBaI58g9qQXHI63vbFw77KZLUaeEOB451i2LTf8Ike6tUq2ZxmJIz+L7BfQBQXJfUQpCqaYspw0NqIURoiC4e9/dEGGavYmXJtOErogxISybVYWSQ6DD1U/LqHv52XG1k3mG+0CETDkP48RYziLaMtjmUHix7hCRgwZBcMQJhT9qBARFIAhIyX60bVGHrTEO950PrdNB3RB+hQEBy39ck8ZDHq8KvDyUJR/o99ubVhYFN8yxEAXZLB9Dehff0aMNFHUSpc8vwrqoC8ovChIvMzzavu7vXj8QN0mCRCDOKHPrk2VQrEN0ybjmpqTiWZHmhFp4LPKD7u8ybFT9ouBf107q+n0firjFb6nW8vkuIESXDfafbphhEDVuzX5yz8EaVOu76vZYSmvzoLcoT2/Wjf8LiTFjs3EqOaU47EOsBojqHCjjVmxoMNNXOhetRItiBo0QiHAQ+Ao0aG0b+XiXBDrVW+91QUBqrCPfk4m986nmyz5ZBdG9VmehuM6km593VCpgDxuHnVsNI3uqry9LnUzqQVOXOfE9jmB8o3TmVRFb57uZdfOncVJcXKHWna8fDPys5GS9wGGnxZr9Wu3IUbPefCu03/q+Qa8tR3/6P4U433C/EuX6jskYG46My/bVT0Qz/n2SOXE0D2Oc6WTebNrXoF9sdoM7FfwePzRBUUCWZiTtPVOeoagC0hetia2sjD/1YzUeMt4798EUqZ9NsYGp4gymBZgKCi9AT+QerL89sojeTGFNAZDIK3Uk6SCx9+hW2dUZgcAAA==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'sîgtryggr';
const packname = process.env.PACKNAME || 'sîgtryggr';
const dev = process.env.OWNER_NUMBER || '254788409105';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'EMINEM-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'typing';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'recording';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/ktqas9.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029VbAVuiVBPzjdU7EVNw0t';
const reactemoji = process.env.EMOJI || '🔗';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antimention = process.env.ANTIMENTION || 'true';
const antibot = process.env.ANTIBOT || 'false';
const antilink = process.env.ANTILINK || 'false';
const antibad = process.env.ANTIBAD || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'false';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'my owner is unavailable text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'false';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'false';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'false';
const anticallmsg = process.env.ANTICALL_MSG || 'Sîgtryggr declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'true';



module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
