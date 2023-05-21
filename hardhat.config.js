require("@nomiclabs/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    goerli: {
        url: "https://eth-goerli.g.alchemy.com/v2/SdVItf_NwJ7whx4g88ZXLn0O7ew9eqIW",
        accounts: ["dbd5a099102c8f0fdf582568162aea3aec0e2dc8f2bc6e41ff0209be919ae24f"]
    }
  },
  solidity: "0.8.18",
};
