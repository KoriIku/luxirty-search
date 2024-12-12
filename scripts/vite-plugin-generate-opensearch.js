/**
 * 跟具配置生成 OpenSearch 描述文件
 * OpenSearch 描述文件 https://developer.mozilla.org/zh-CN/docs/Web/OpenSearch
 * @returns
 */
function vitePluginGenerateOpensearch() {
  let xml = "";

  return {
    name: "vite-plugin-generate-opensearch",
    configResolved() {
      const shortName = process.env.VITE_OPEN_SEARCH_ShortName;
      const urlTemplateBase = process.env.VITE_OPEN_SEARCH_UrlTemplateBase;
      xml = `<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/" xmlns:moz="http://www.mozilla.org/2006/browser/search/">\n`;
      xml += `<ShortName>${shortName}</ShortName>\n`;
      xml += `<Description>${shortName}</Description>\n`;
      xml += "<InputEncoding>UTF-8</InputEncoding>\n";
      xml +=
        '<Image width="16" height="16" type="image/x-icon">/favicon.ico</Image>\n';
      xml += `<Url type="text/html" method="get" template="${urlTemplateBase}/search?q={searchTerms}"/>\n`;
      xml += "<moz:SearchForm>/search</moz:SearchForm>\n";
      xml += "</OpenSearchDescription>";
    },
    configureServer(server) {
      // dev，开发服务器时返回 opensearch.xml
      return () => {
        server.middlewares.use((req, res, next) => {
          if (req.originalUrl === "/opensearch.xml") {
            res.setHeader("Content-Type", "text/xml");
            res.end(xml);
          } else {
            next();
          }
        });
      };
    },
    // 构建结束后执行的钩子函数
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "opensearch.xml",
        source: xml,
      });
    },

    getXmlContent() {},
  };
}

export default vitePluginGenerateOpensearch;
