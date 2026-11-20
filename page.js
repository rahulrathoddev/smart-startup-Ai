import AgentSuite from "../components/AgentSuite";

export default function HomePage() {
  return (
    <div className="page-shell">
      <div className="ambient-glow glow-green" aria-hidden="true" />
      <div className="ambient-glow glow-beige" aria-hidden="true" />
      <div className="ambient-glow glow-core" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <AgentSuite />
    </div>
  );
}
