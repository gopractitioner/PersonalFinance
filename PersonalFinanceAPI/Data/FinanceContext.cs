using Microsoft.EntityFrameworkCore;
using PersonalFinanceAPI.Models;

namespace PersonalFinanceAPI.Data
{
    public class FinanceContext : DbContext
    {
        public FinanceContext(DbContextOptions<FinanceContext> options) : base(options) { }

        public DbSet<Transaction> Transactions { get; set; }
    }
}
