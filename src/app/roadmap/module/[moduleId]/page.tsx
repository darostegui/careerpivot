import ModuleExperience from "./module-experience";

export default async function RoadmapModulePage({
  params,
  searchParams,
}: {
  params: Promise<{ moduleId: string }>;
  searchParams: Promise<{ role?: string }>;
}) {
  const [{ moduleId }, query] = await Promise.all([params, searchParams]);

  return <ModuleExperience moduleId={moduleId} roleTitle={query.role ?? ""} />;
}
