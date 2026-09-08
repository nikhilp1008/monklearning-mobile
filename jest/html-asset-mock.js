// Metro resolves `require('*.html')` to a numeric module id via its asset
// plugin; Jest has no such transform for `.html` and would otherwise throw
// "Unexpected token" trying to parse markup as JavaScript.
//
// This exists solely so that importing lib/widgets/registry.ts (which imports
// molecule-3d, whose index.tsx does
// `require('../../../assets/molecule-host.html')` at module scope — see
// molecule-3d/index.tsx:78) does not crash tests that need the registry for
// something other than rendering molecule_3d: the coverage guard, `derived`
// self-consistency, and scripts/export-registry.mjs's manifest generator.
//
// The value is never read by anything those tests touch — molecule_3d's
// WebView path (which calls Asset.fromModule on this) is explicitly SKIPped
// by the render harness, not exercised.
module.exports = 1;
