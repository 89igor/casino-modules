create view uw_boss_view as select b.*, u.name from uw_boss b, uw_user u where b.userId = u.id