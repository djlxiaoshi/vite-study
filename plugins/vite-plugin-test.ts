export default function myPlugin() {
  const virtualFileId = "@my-virtual-file";

  return {
    name: "my-plugin", // required, will show up in warnings and errors
    resolveId(id) {
      if (id === virtualFileId) {
        return virtualFileId;
      }
    },
    load(id) {
      if (id === virtualFileId) {
        return `export const msg = "from virtual file"`;
      }
    },
  };
}
