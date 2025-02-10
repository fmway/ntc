{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    android-nixpkgs.url = "github:tadfisher/android-nixpkgs";
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" "aarch64-linux" ];

      perSystem = { pkgs, system, ... }: let
        android-sdk = inputs.android-nixpkgs.sdk.${system} (sdkPkgs: with sdkPkgs; [
          build-tools-30-0-3
          build-tools-33-0-0
          cmdline-tools-latest
          emulator
          # patcher-v4
          platform-tools
          platforms-android-33
          system-images-android-32-google-apis-x86-64
        ]);
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            android-sdk
          ] ++ (with pkgs; [
            nodejs
            nodePackages.eas-cli
            nodePackages.pnpm
            watchman
          ]);

          shellHook = ''
            source ${android-sdk}/nix-support/setup-hook
          '';
        };
      };
    };
}
