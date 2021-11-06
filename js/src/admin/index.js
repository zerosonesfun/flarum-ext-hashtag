import app from "flarum/admin/app";

app.initializers.add("justoverclock/flarum-ext-hashtag", () => {
  app.extensionData.for("justoverclock-hashtag").registerSetting(
    {
      setting: "justoverclock-hashtag.regex",
      name: "justoverclock-hashtag.regex",
      type: "text",
      placeholder: "(^|\s)#(\p{L}*\p{S}*\p{M}*)",
      help: app.translator.trans( "justoverclock-hashtag.admin.settings.regexdesc" ),
      label: app.translator.trans( "justoverclock-hashtag.admin.settings.regexlabel" ),
    },
    15
  );
});
