const getEmailTemplate = ({ username, date, seat_number }) => {
  var emailTemplate="";

  emailTemplate += "<!DOCTYPE HTML PUBLIC \"-\/\/W3C\/\/DTD XHTML 1.0 Transitional \/\/EN\" \"http:\/\/www.w3.org\/TR\/xhtml1\/DTD\/xhtml1-transitional.dtd\"><html xmlns=\"http:\/\/www.w3.org\/1999\/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\"><head>";
  emailTemplate += "    <!--[if gte mso 9]><xml>";
  emailTemplate += "     <o:OfficeDocumentSettings>";
  emailTemplate += "      <o:AllowPNG\/>";
  emailTemplate += "      <o:PixelsPerInch>96<\/o:PixelsPerInch>";
  emailTemplate += "     <\/o:OfficeDocumentSettings>";
  emailTemplate += "    <\/xml><![endif]-->";
  emailTemplate += "    <meta http-equiv=\"Content-Type\" content=\"text\/html; charset=utf-8\">";
  emailTemplate += "    <meta name=\"viewport\" content=\"width=device-width\">";
  emailTemplate += "    <!--[if !mso]><!--><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><!--<![endif]-->";
  emailTemplate += "    <title>Template Base<\/title>";
  emailTemplate += "    <!--[if !mso]><!-- -->";
  emailTemplate += "  <link href=\"https:\/\/fonts.googleapis.com\/css?family=Montserrat\" rel=\"stylesheet\" type=\"text\/css\">";
  emailTemplate += "  <!--<![endif]-->";
  emailTemplate += "    ";
  emailTemplate += "    <style type=\"text\/css\" id=\"media-query\">";
  emailTemplate += "      body {";
  emailTemplate += "  margin: 0;";
  emailTemplate += "  padding: 0; }";
  emailTemplate += "";
  emailTemplate += "table, tr, td {";
  emailTemplate += "  vertical-align: top;";
  emailTemplate += "  border-collapse: collapse; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser table, .mso-container table {";
  emailTemplate += "  table-layout: fixed; }";
  emailTemplate += "";
  emailTemplate += "* {";
  emailTemplate += "  line-height: inherit; }";
  emailTemplate += "";
  emailTemplate += "a[x-apple-data-detectors=true] {";
  emailTemplate += "  color: inherit !important;";
  emailTemplate += "  text-decoration: none !important; }";
  emailTemplate += "";
  emailTemplate += "[owa] .img-container div, [owa] .img-container button {";
  emailTemplate += "  display: block !important; }";
  emailTemplate += "";
  emailTemplate += "[owa] .fullwidth button {";
  emailTemplate += "  width: 100% !important; }";
  emailTemplate += "";
  emailTemplate += "[owa] .block-grid .col {";
  emailTemplate += "  display: table-cell;";
  emailTemplate += "  float: none !important;";
  emailTemplate += "  vertical-align: top; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .num12, .ie-browser .block-grid, [owa] .num12, [owa] .block-grid {";
  emailTemplate += "  width: 500px !important; }";
  emailTemplate += "";
  emailTemplate += ".ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {";
  emailTemplate += "  line-height: 100%; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .mixed-two-up .num4, [owa] .mixed-two-up .num4 {";
  emailTemplate += "  width: 164px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .mixed-two-up .num8, [owa] .mixed-two-up .num8 {";
  emailTemplate += "  width: 328px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .block-grid.two-up .col, [owa] .block-grid.two-up .col {";
  emailTemplate += "  width: 250px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .block-grid.three-up .col, [owa] .block-grid.three-up .col {";
  emailTemplate += "  width: 166px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .block-grid.four-up .col, [owa] .block-grid.four-up .col {";
  emailTemplate += "  width: 125px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .block-grid.five-up .col, [owa] .block-grid.five-up .col {";
  emailTemplate += "  width: 100px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .block-grid.six-up .col, [owa] .block-grid.six-up .col {";
  emailTemplate += "  width: 83px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .block-grid.seven-up .col, [owa] .block-grid.seven-up .col {";
  emailTemplate += "  width: 71px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .block-grid.eight-up .col, [owa] .block-grid.eight-up .col {";
  emailTemplate += "  width: 62px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .block-grid.nine-up .col, [owa] .block-grid.nine-up .col {";
  emailTemplate += "  width: 55px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .block-grid.ten-up .col, [owa] .block-grid.ten-up .col {";
  emailTemplate += "  width: 50px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .block-grid.eleven-up .col, [owa] .block-grid.eleven-up .col {";
  emailTemplate += "  width: 45px !important; }";
  emailTemplate += "";
  emailTemplate += ".ie-browser .block-grid.twelve-up .col, [owa] .block-grid.twelve-up .col {";
  emailTemplate += "  width: 41px !important; }";
  emailTemplate += "";
  emailTemplate += "@media only screen and (min-width: 520px) {";
  emailTemplate += "  .block-grid {";
  emailTemplate += "    width: 500px !important; }";
  emailTemplate += "  .block-grid .col {";
  emailTemplate += "    vertical-align: top; }";
  emailTemplate += "    .block-grid .col.num12 {";
  emailTemplate += "      width: 500px !important; }";
  emailTemplate += "  .block-grid.mixed-two-up .col.num4 {";
  emailTemplate += "    width: 164px !important; }";
  emailTemplate += "  .block-grid.mixed-two-up .col.num8 {";
  emailTemplate += "    width: 328px !important; }";
  emailTemplate += "  .block-grid.two-up .col {";
  emailTemplate += "    width: 250px !important; }";
  emailTemplate += "  .block-grid.three-up .col {";
  emailTemplate += "    width: 166px !important; }";
  emailTemplate += "  .block-grid.four-up .col {";
  emailTemplate += "    width: 125px !important; }";
  emailTemplate += "  .block-grid.five-up .col {";
  emailTemplate += "    width: 100px !important; }";
  emailTemplate += "  .block-grid.six-up .col {";
  emailTemplate += "    width: 83px !important; }";
  emailTemplate += "  .block-grid.seven-up .col {";
  emailTemplate += "    width: 71px !important; }";
  emailTemplate += "  .block-grid.eight-up .col {";
  emailTemplate += "    width: 62px !important; }";
  emailTemplate += "  .block-grid.nine-up .col {";
  emailTemplate += "    width: 55px !important; }";
  emailTemplate += "  .block-grid.ten-up .col {";
  emailTemplate += "    width: 50px !important; }";
  emailTemplate += "  .block-grid.eleven-up .col {";
  emailTemplate += "    width: 45px !important; }";
  emailTemplate += "  .block-grid.twelve-up .col {";
  emailTemplate += "    width: 41px !important; } }";
  emailTemplate += "";
  emailTemplate += "@media (max-width: 520px) {";
  emailTemplate += "  .block-grid, .col {";
  emailTemplate += "    min-width: 320px !important;";
  emailTemplate += "    max-width: 100% !important;";
  emailTemplate += "    display: block !important; }";
  emailTemplate += "  .block-grid {";
  emailTemplate += "    width: calc(100% - 40px) !important; }";
  emailTemplate += "  .col {";
  emailTemplate += "    width: 100% !important; }";
  emailTemplate += "    .col > div {";
  emailTemplate += "      margin: 0 auto; }";
  emailTemplate += "  img.fullwidth, img.fullwidthOnMobile {";
  emailTemplate += "    max-width: 100% !important; } }";
  emailTemplate += "";
  emailTemplate += "    <\/style>";
  emailTemplate += "<\/head>";
  emailTemplate += "<body class=\"clean-body\" style=\"margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFFFFF\">";
  emailTemplate += "  <style type=\"text\/css\" id=\"media-query-bodytag\">";
  emailTemplate += "    @media (max-width: 520px) {";
  emailTemplate += "      .block-grid {";
  emailTemplate += "        min-width: 320px!important;";
  emailTemplate += "        max-width: 100%!important;";
  emailTemplate += "        width: 100%!important;";
  emailTemplate += "        display: block!important;";
  emailTemplate += "      }";
  emailTemplate += "";
  emailTemplate += "      .col {";
  emailTemplate += "        min-width: 320px!important;";
  emailTemplate += "        max-width: 100%!important;";
  emailTemplate += "        width: 100%!important;";
  emailTemplate += "        display: block!important;";
  emailTemplate += "      }";
  emailTemplate += "";
  emailTemplate += "        .col > div {";
  emailTemplate += "          margin: 0 auto;";
  emailTemplate += "        }";
  emailTemplate += "";
  emailTemplate += "      img.fullwidth {";
  emailTemplate += "        max-width: 100%!important;";
  emailTemplate += "      }";
  emailTemplate += "    }";
  emailTemplate += "  <\/style>";
  emailTemplate += "  <!--[if IE]><div class=\"ie-browser\"><![endif]-->";
  emailTemplate += "  <!--[if mso]><div class=\"mso-container\"><![endif]-->";
  emailTemplate += "  <table class=\"nl-container\" style=\"border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #FFFFFF;width: 100%\" cellpadding=\"0\" cellspacing=\"0\">";
  emailTemplate += "  <tbody>";
  emailTemplate += "  <tr style=\"vertical-align: top\">";
  emailTemplate += "    <td style=\"word-break: break-word;border-collapse: collapse !important;vertical-align: top\">";
  emailTemplate += "    <!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td align=\"center\" style=\"background-color: #FFFFFF;\"><![endif]-->";
  emailTemplate += "";
  emailTemplate += "    <div style=\"background-color:#CCD7D9;\">";
  emailTemplate += "      <div style=\"Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #CCD7D9;\" class=\"block-grid \">";
  emailTemplate += "        <div style=\"border-collapse: collapse;display: table;width: 100%;background-color:#CCD7D9;\">";
  emailTemplate += "          <!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"background-color:#CCD7D9;\" align=\"center\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 500px;\"><tr class=\"layout-full-width\" style=\"background-color:#CCD7D9;\"><![endif]-->";
  emailTemplate += "";
  emailTemplate += "              <!--[if (mso)|(IE)]><td align=\"center\" width=\"500\" style=\" width:500px; padding-right: 0px; padding-left: 0px; padding-top:60px; padding-bottom:60px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;\" valign=\"top\"><![endif]-->";
  emailTemplate += "            <div class=\"col num12\" style=\"min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;\">";
  emailTemplate += "              <div style=\"background-color: transparent; width: 100% !important;\">";
  emailTemplate += "              <!--[if (!mso)&(!IE)]><!--><div style=\"border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:60px; padding-bottom:60px; padding-right: 0px; padding-left: 0px;\"><!--<![endif]-->";
  emailTemplate += "";
  emailTemplate += "                  ";
  emailTemplate += "                    &#160;";
  emailTemplate += "                  ";
  emailTemplate += "              <!--[if (!mso)&(!IE)]><!--><\/div><!--<![endif]-->";
  emailTemplate += "              <\/div>";
  emailTemplate += "            <\/div>";
  emailTemplate += "          <!--[if (mso)|(IE)]><\/td><\/tr><\/table><\/td><\/tr><\/table><![endif]-->";
  emailTemplate += "        <\/div>";
  emailTemplate += "      <\/div>";
  emailTemplate += "    <\/div>    <div style=\"background-color:transparent;\">";
  emailTemplate += "      <div style=\"Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;\" class=\"block-grid \">";
  emailTemplate += "        <div style=\"border-collapse: collapse;display: table;width: 100%;background-color:transparent;\">";
  emailTemplate += "          <!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"background-color:transparent;\" align=\"center\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 500px;\"><tr class=\"layout-full-width\" style=\"background-color:transparent;\"><![endif]-->";
  emailTemplate += "";
  emailTemplate += "              <!--[if (mso)|(IE)]><td align=\"center\" width=\"500\" style=\" width:500px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;\" valign=\"top\"><![endif]-->";
  emailTemplate += "            <div class=\"col num12\" style=\"min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;\">";
  emailTemplate += "              <div style=\"background-color: transparent; width: 100% !important;\">";
  emailTemplate += "              <!--[if (!mso)&(!IE)]><!--><div style=\"border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;\"><!--<![endif]-->";
  emailTemplate += "";
  emailTemplate += "                  ";
  emailTemplate += "                    <!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 15px;\"><![endif]-->";
  emailTemplate += "<div style=\"font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:120%;color:#555555; padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 15px;\"> ";
  emailTemplate += "  <div style=\"font-family:Montserrat, 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:12px;line-height:14px;color:#555555;text-align:left;\"><p style=\"margin: 0;font-size: 12px;line-height: 14px;text-align: center\"><span style=\"font-size: 18px; line-height: 21px;\"><strong>바닐라 스터디 예약 확정 안내<\/strong><\/span><\/p><\/div>  ";
  emailTemplate += "<\/div>";
  emailTemplate += "<!--[if mso]><\/td><\/tr><\/table><![endif]-->";
  emailTemplate += "";
  emailTemplate += "                  ";
  emailTemplate += "                  ";
  emailTemplate += "                    <!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 60px; padding-left: 60px; padding-top: 10px; padding-bottom: 30px;\"><![endif]-->";
  emailTemplate += "<div style=\"font-family: 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif;line-height:120%;color:#989898; padding-right: 60px; padding-left: 60px; padding-top: 10px; padding-bottom: 30px;\"> ";
  emailTemplate += `  <div style=\"font-size:12px;line-height:14px;color:#989898;font-family:'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif;text-align:left;\"><p style=\"margin: 0;font-size: 12px;line-height: 14px\"><span style=\"font-size: 22px; line-height: 26px;\">예약자: ${username}<\/span><\/p><\/div><div style=\"font-size:12px;line-height:14px;color:#989898;font-family:'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif;text-align:left;\"><p style=\"margin: 0;font-size: 12px;line-height: 14px\"><span style=\"font-size: 22px; line-height: 26px;\">예약일: ${date}<\/span><\/p><\/div><div style=\"font-size:12px;line-height:14px;color:#989898;font-family:'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Geneva, Verdana, sans-serif;text-align:left;\"><p style=\"margin: 0;font-size: 12px;line-height: 14px\"><span style=\"font-size: 22px; line-height: 26px;\">예약좌석: ${seat_number}<\/span><\/p><\/div>  `;
  emailTemplate += "<\/div>";
  emailTemplate += "<!--[if mso]><\/td><\/tr><\/table><![endif]-->";
  emailTemplate += "";
  emailTemplate += "                  ";
  emailTemplate += "              <!--[if (!mso)&(!IE)]><!--><\/div><!--<![endif]-->";
  emailTemplate += "              <\/div>";
  emailTemplate += "            <\/div>";
  emailTemplate += "          <!--[if (mso)|(IE)]><\/td><\/tr><\/table><\/td><\/tr><\/table><![endif]-->";
  emailTemplate += "        <\/div>";
  emailTemplate += "      <\/div>";
  emailTemplate += "    <\/div>    <div style=\"background-color:#5ACEE1;\">";
  emailTemplate += "      <div style=\"Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;\" class=\"block-grid \">";
  emailTemplate += "        <div style=\"border-collapse: collapse;display: table;width: 100%;background-color:transparent;\">";
  emailTemplate += "          <!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"background-color:#5ACEE1;\" align=\"center\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 500px;\"><tr class=\"layout-full-width\" style=\"background-color:transparent;\"><![endif]-->";
  emailTemplate += "";
  emailTemplate += "              <!--[if (mso)|(IE)]><td align=\"center\" width=\"500\" style=\" width:500px; padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;\" valign=\"top\"><![endif]-->";
  emailTemplate += "            <div class=\"col num12\" style=\"min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;\">";
  emailTemplate += "              <div style=\"background-color: transparent; width: 100% !important;\">";
  emailTemplate += "              <!--[if (!mso)&(!IE)]><!--><div style=\"border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;\"><!--<![endif]-->";
  emailTemplate += "";
  emailTemplate += "                  ";
  emailTemplate += "                    <div style=\"padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px;\">";
  emailTemplate += "  <!--[if (mso)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right: 0px;padding-left: 0px; padding-top: 0px; padding-bottom: 0px;\"><table width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td><![endif]-->";
  emailTemplate += "  <div align=\"center\"><div style=\"border-top: 0px solid transparent; width:100%; line-height:0px; height:0px; font-size:0px;\">&#160;<\/div><\/div>";
  emailTemplate += "  <!--[if (mso)]><\/td><\/tr><\/table><\/td><\/tr><\/table><![endif]-->";
  emailTemplate += "<\/div>";
  emailTemplate += "";
  emailTemplate += "                  ";
  emailTemplate += "              <!--[if (!mso)&(!IE)]><!--><\/div><!--<![endif]-->";
  emailTemplate += "              <\/div>";
  emailTemplate += "            <\/div>";
  emailTemplate += "          <!--[if (mso)|(IE)]><\/td><\/tr><\/table><\/td><\/tr><\/table><![endif]-->";
  emailTemplate += "        <\/div>";
  emailTemplate += "      <\/div>";
  emailTemplate += "    <\/div>    <div style=\"background-color:#CCD7D9;\">";
  emailTemplate += "      <div style=\"Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #CCD7D9;\" class=\"block-grid \">";
  emailTemplate += "        <div style=\"border-collapse: collapse;display: table;width: 100%;background-color:#CCD7D9;\">";
  emailTemplate += "          <!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"background-color:#CCD7D9;\" align=\"center\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 500px;\"><tr class=\"layout-full-width\" style=\"background-color:#CCD7D9;\"><![endif]-->";
  emailTemplate += "";
  emailTemplate += "              <!--[if (mso)|(IE)]><td align=\"center\" width=\"500\" style=\" width:500px; padding-right: 0px; padding-left: 0px; padding-top:60px; padding-bottom:45px; border-top: 0px solid #5ACEE1; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;\" valign=\"top\"><![endif]-->";
  emailTemplate += "            <div class=\"col num12\" style=\"min-width: 320px;max-width: 500px;display: table-cell;vertical-align: top;\">";
  emailTemplate += "              <div style=\"background-color: transparent; width: 100% !important;\">";
  emailTemplate += "              <!--[if (!mso)&(!IE)]><!--><div style=\"border-top: 0px solid #5ACEE1; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:60px; padding-bottom:45px; padding-right: 0px; padding-left: 0px;\"><!--<![endif]-->";
  emailTemplate += "";
  emailTemplate += "                  ";
  emailTemplate += "                    &#160;";
  emailTemplate += "                  ";
  emailTemplate += "              <!--[if (!mso)&(!IE)]><!--><\/div><!--<![endif]-->";
  emailTemplate += "              <\/div>";
  emailTemplate += "            <\/div>";
  emailTemplate += "          <!--[if (mso)|(IE)]><\/td><\/tr><\/table><\/td><\/tr><\/table><![endif]-->";
  emailTemplate += "        <\/div>";
  emailTemplate += "      <\/div>";
  emailTemplate += "    <\/div>   <!--[if (mso)|(IE)]><\/td><\/tr><\/table><![endif]-->";
  emailTemplate += "    <\/td>";
  emailTemplate += "  <\/tr>";
  emailTemplate += "  <\/tbody>";
  emailTemplate += "  <\/table>";
  emailTemplate += "  <!--[if (mso)|(IE)]><\/div><![endif]-->";
  emailTemplate += "";
  emailTemplate += "<\/body><\/html>";

  return emailTemplate;
};

module.exports = {
  getEmailTemplate: getEmailTemplate
};
