alter table "public"."resources"
  add constraint "resources_current_version_id_fkey"
  foreign key ("current_version_id")
  references "public"."resource_versions"
  ("id") on update restrict on delete cascade;
