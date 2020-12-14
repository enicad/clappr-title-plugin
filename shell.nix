with import <nixpkgs> { };

mkShell {
  name = "env";
  buildInputs = [
    nodejs
  ] ++ lib.optional stdenv.isLinux inotify-tools
    ++ lib.optionals stdenv.isDarwin
    (with darwin.apple_sdk.frameworks; [ CoreFoundation CoreServices ]);
}
