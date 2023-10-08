{
  description = "A very basic flake";

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    yucade-website = {
      lib,
      mkYarnPackage,
      fetchYarnDeps,
      nodejs,
      makeWrapper,
    }:
      mkYarnPackage rec {
        pname = "yucade-website";
        version = "1.0.0";

        src = ./.;

        offlineCache = fetchYarnDeps {
          yarnLock = src + "/yarn.lock";
          hash = "sha256-Nnt6FLMbaSU7mYhlU2UF4OIv6Jku4ryptkJb0fkB56E=";
        };

        buildPhase = ''
          runHook preBuild
          (
            shopt -s dotglob
            export HOME=deps/yucade-website
            cd $HOME
            yarn build
            rm -r .next/cache
          )
          runHook postBuild
        '';

        nativeBuildInputs = [
          nodejs
          makeWrapper
        ];

        postInstall = ''
          makeWrapper '${nodejs}/bin/node' "$out/bin/jellyseerr" \
            --add-flags "$out/libexec/jellyseerr/deps/jellyseerr/dist/index.js" \
            --set NODE_ENV production
        '';

        # buildPhase = ''
        #   runHook preBuild

        #   yarn --offline run build
        #   cp -r deps/${pname} $out

        #   runHook postbuild
        # '';

        doDist = "true";

        meta = with lib; {
          description = "";
          license = licenses.unlicense;
          platforms = platforms.linux;
          maintainers = with maintainers; [andresnav];
        };
      };
  in {
    packages.${system}.default = with import nixpkgs {inherit system;};
      callPackage yucade-website {};
  };
}
